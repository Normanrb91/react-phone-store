interface SearchBarProps {
  value: string;
  onChange: (query: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => (
  <div className="flex justify-end my-4">
    <div className="relative w-full md:w-1/3">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        🔍
      </span>
      <input
        type="text"
        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Buscar productos..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  </div>
);

export default SearchBar;
