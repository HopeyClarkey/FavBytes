
import Map from './Map';
import ByteList from './ByteList';

export default function HomePage({ user, dishes }) {

  return (
    <div id="homePage" className="homePage">
      <div id="byteList">
        <ByteList dishes={dishes} user={user}/>
      </div>

      <div id="map" className="map">
        <Map dishes={dishes} user={user} />
      </div>
    </div>
  );
}