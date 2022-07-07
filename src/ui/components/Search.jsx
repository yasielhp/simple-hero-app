import { IconSearch } from "../../heroes/components"

export const Search = ({ onSearchSubmit,searchText,onInputChange}) => {
  return (
    <div className="flex items-center justify-center w-full pt-4 animate__animated animate__bounceIn">
      <form onSubmit={onSearchSubmit} className="flex border-2 rounded">
        <input type="text" className="px-4 py-2 w-80" placeholder="Search..." name="searchText" value={searchText} onChange={onInputChange } />
        <button className="flex items-center justify-center px-4 border-l">
          <IconSearch />
        </button>
      </form>
    </div>
  )
}
