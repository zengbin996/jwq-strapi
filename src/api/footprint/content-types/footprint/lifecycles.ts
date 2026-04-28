function parseCoordinates(data: Record<string, any>) {
  const coords = data.coordinates;
  if (!coords || typeof coords !== 'string') return;

  const parts = coords.split(',').map((s: string) => s.trim());
  if (parts.length !== 2) return;

  const lat = parseFloat(parts[0]);
  const lng = parseFloat(parts[1]);
  if (isNaN(lat) || isNaN(lng)) return;

  data.latitude = lat;
  data.longitude = lng;
}

export default {
  beforeCreate(event: any) {
    parseCoordinates(event.params.data);
  },
  beforeUpdate(event: any) {
    parseCoordinates(event.params.data);
  },
};
