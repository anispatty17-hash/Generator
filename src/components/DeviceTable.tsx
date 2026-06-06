// placeholder
"use client";

import StatusBadge from "./StatusBadge";

export default function DeviceTable({
  devices,
  onDelete
}: any) {
  return (
    <table className="w-full">

      <thead>
        <tr>
          <th>ID</th>
          <th>Device ID</th>
          <th>Name</th>
          <th>Provider</th>
          <th>Status</th>
          <th>Last Sync</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>

        {devices.map(
          (device: any) => (
            <tr key={device.id}>

              <td>{device.id}</td>

              <td>
                {device.device_id}
              </td>

              <td>
                {device.device_name}
              </td>

              <td>
                {device.provider}
              </td>

              <td>
                <StatusBadge
                  status={
                    device.status
                  }
                />
              </td>

              <td>
                {device.last_sync
                  ? new Date(
                      device.last_sync
                    ).toLocaleString()
                  : "-"}
              </td>

              <td>
                <button
                  onClick={() =>
                    onDelete(
                      device.id
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