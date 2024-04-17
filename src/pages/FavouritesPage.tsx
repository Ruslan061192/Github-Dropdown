import { useAppSelector } from "../hooks/redux";

export function FavouritesPages() {
  const { favourites } = useAppSelector((state) => state.github);

  if (favourites.length === 0) return <p className="text-center">No items</p>;

  return (
    <ul className="list-none">
      {favourites.map((f) => (
        <li key={f}>
          <a href={f}>{f}</a>
        </li>
      ))}
    </ul>
  );
}
