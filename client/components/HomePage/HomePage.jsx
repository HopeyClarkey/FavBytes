import AppMap from './Map';

export default function HomePage() {
  return (
    <div id="homepage" className="homepage">
      <h1>This is the Homepage!</h1>
      <div className="mapBox">
        <div className="map">
          <AppMap />
        </div>
      </div>
    </div>
  );
}
