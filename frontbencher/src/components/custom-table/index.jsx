const CustomTable = ({ label, columns, rows }) => (
  <div className="overflow-scroll shadow-md rounded-lg">
    <div className="bg-deep-blue py-3 text-white text-center font-bold">
      {label}
    </div>
    <div className="overflow-scroll w-full border border-t-0 border-neutral-300 rounded-b-lg">
      <table className="border-collapse border-spacing-0 bg-pure-white shadow-lg text-xs sm:text-base">
        <thead>
          <tr className="border-b border-neutral-300">
            {columns.map((v, i) => (
              <th key={i} className="px-8 py-2 font-normal text-left">
                {v}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-neutral-600">
          {rows.map((r, i) => (
            <tr
              key={i}
              className="border-b border-neutral-300 last:border-b-0 odd:bg-neutral-100"
            >
              {r.map((v, i) => (
                <td key={i} className="px-8 py-2 align-text-top">
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
