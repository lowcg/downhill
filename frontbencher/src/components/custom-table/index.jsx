const CustomTable = ({ label, columns, rows }) => (
  <div className="rounded-lg overflow-scroll">
    <div className="bg-deep-blue py-2 text-white text-center">
      {label}
    </div>
    <div className="overflow-scroll w-full">
      <table className="border-collapse border-spacing-0 bg-pure-white shadow-lg text-xs sm:text-base">
        <thead>
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
    </div>
  </div>
);
export default CustomTable;
