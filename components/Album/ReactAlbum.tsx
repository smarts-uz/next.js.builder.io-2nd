import PhotoAlbum from "react-photo-album";

const photos = [
  { src: "https://picsum.photos/id/1018/250/150/", width: 800, height: 600 },
  { src: "https://picsum.photos/id/1015/250/150/", width: 1600, height: 900 },
];

export default function Gallery() {
  return <PhotoAlbum layout="rows" photos={photos} />;
}