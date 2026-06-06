// placeholder
"use client";

import { useEffect, useState } from "react";

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";
import SMSList from "@/components/SMSList";
import Pagination from "@/components/Pagination";

import { SMS } from "@/types/sms";

export default function InboxPage() {

  const [page, setPage] =
    useState(1);

  const [total, setTotal] =
    useState(0);

  const [search, setSearch] =
    useState("");

  const [sms, setSms] =
    useState<SMS[]>([]);

  async function loadData() {

    const res = await fetch(
      `/api/sms?page=${page}`
    );

    const data = await res.json();

    let filtered =
      data.data;

    if (search) {
      filtered =
        filtered.filter((item: SMS) =>
          item.sender
            .toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||
          item.message
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
        );
    }

    setSms(filtered);

    setTotal(
      data.pagination.total
    );
  }

  async function deleteSMS(
    id: number
  ) {
    if (
      !confirm(
        "Delete this message?"
      )
    )
      return;

    await fetch(
      `/api/sms?id=${id}`,
      {
        method: "DELETE"
      }
    );

    loadData();
  }

  useEffect(() => {

    loadData();

    const interval =
      setInterval(
        loadData,
        10000
      );

    return () =>
      clearInterval(interval);

  }, [page, search]);

  return (
    <div className="flex">

      <Sidebar />

      <main className="flex-1">

        <Navbar />

        <div className="p-6">

          <div className="flex justify-between mb-6">

            <SearchBox
              value={search}
              onChange={setSearch}
              placeholder="Search sender or message..."
            />

            <a
              href="/api/export"
              className="
              ml-4
              bg-cyan-500
              px-4
              py-3
              rounded-xl
              "
            >
              Export CSV
            </a>

          </div>

          <div className="card p-4">

            <SMSList
              data={sms}
              onDelete={deleteSMS}
            />

            <Pagination
              page={page}
              total={total}
              limit={20}
              onChange={setPage}
            />

          </div>

        </div>

      </main>

    </div>
  );
}