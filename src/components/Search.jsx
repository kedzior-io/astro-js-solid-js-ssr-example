import { createSignal } from "solid-js";

export default function Search() {
  const [value, setValue] = createSignal("");
  let searchInput;

  return (
    <div class="search">
      <input type="text" ref={searchInput} placeholder="type and click search..." />
      <button onClick={() => setValue(searchInput.value)}>Search</button>
      <p>You searched for: {value()}</p>
    </div>
  );
}
