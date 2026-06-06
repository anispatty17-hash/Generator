// placeholder
"use client";

export default function NumberTable({
  numbers,
  onDelete
}: any) {
  return (
    <table className="w-full">

      <thead>
        <tr>
          <th>Number</th>
          <th>Provider</th>
          <th>Label</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>

        {numbers.map(
          (item: any) => (
            <tr key={item.id}>

              <td>
                {item.phone_number}
              </td>

              <td>
                {item.provider}
              </td>

              <td>
                {item.label}
              </td>

              <td>
                {item.status}
              </td>

              <td>
                <button
                  onClick={() =>
                    onDelete(
                      item.id
                    )
                  }
                >
                  Delete
                </button>
              </td>

            </tr>
          )
        )}

      </tbody>

    </table>
  );
}