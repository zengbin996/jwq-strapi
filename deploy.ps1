$SERVER = "root@101.96.201.178"
$REMOTE_PATH = "/www/jwq-strapi"
$ARCHIVE = "jwq-strapi.tar.gz"

Write-Host ">>> Building..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) { Write-Host "Build failed" -ForegroundColor Red; exit 1 }

Write-Host ">>> Packing..." -ForegroundColor Cyan
tar -czf $ARCHIVE --exclude='.git' --exclude='node_modules' --exclude='.tmp' --exclude='.env' --exclude='deploy.ps1' --exclude=$ARCHIVE .
if ($LASTEXITCODE -ne 0) { Write-Host "Pack failed" -ForegroundColor Red; exit 1 }

Write-Host ">>> Uploading..." -ForegroundColor Cyan
scp $ARCHIVE "${SERVER}:/www/"
if ($LASTEXITCODE -ne 0) { Write-Host "Upload failed" -ForegroundColor Red; exit 1 }

Write-Host ">>> Deploying..." -ForegroundColor Cyan
ssh $SERVER @"
  set -e
  mkdir -p $REMOTE_PATH
  cp $REMOTE_PATH/.env /tmp/strapi-env-backup 2>/dev/null || true
  rm -rf $REMOTE_PATH
  mkdir -p $REMOTE_PATH
  tar -xzf /www/$ARCHIVE -C $REMOTE_PATH
  cp /tmp/strapi-env-backup $REMOTE_PATH/.env 2>/dev/null || true
  cd $REMOTE_PATH
  npm install --omit=dev
  pm2 restart strapi
  pm2 save
"@

Write-Host ">>> Cleanup..." -ForegroundColor Cyan
Remove-Item $ARCHIVE

Write-Host "Deploy success!" -ForegroundColor Green
Write-Host "Admin: http://101.96.201.178:1337/admin" -ForegroundColor Green
