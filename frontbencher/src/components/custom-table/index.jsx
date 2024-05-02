const CustomTable = ({ label, columns, rows, showLabel = true }) => (
  <table className="border-collapse rounded-lg overflow-hidden border-spacing-0 bg-pure-white shadow-lg">
    <thead>
      <tr className="bg-deep-blue">
        {showLabel && (
          <th colSpan={columns.length} className="text-white text-lg py-3">
            {label}
          </th>
        )}
      </tr>
      <tr className="border-b border-neutral-300">
        {columns.map((v, i) => (
          <th key={i} className="px-8 py-2 font-normal">
            {v}
          </th>
        ))}
      </tr>
    </thead>
    <tbody className="text-neutral-600">
      {rows.map((r, i) => (
        <tr key={i} className="border-b  border-neutral-300">
          {r.map((v, i) => (
            <td key={i} className="px-8 py-2">
              {v}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
export default CustomTable;
