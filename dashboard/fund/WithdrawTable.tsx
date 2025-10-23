"use client";
import {
    ColumnDef,
    useReactTable,
    getCoreRowModel,
    getPaginationRowModel,
    getFilteredRowModel,
    ColumnFiltersState,
} from "@tanstack/react-table";
import { useState, useMemo } from "react";
import { ChevronRight, ChevronLeft, Search } from "lucide-react";
import { DataTable } from "@/Shared/Table/Table";
import { Button } from "@/components/ui/button";
import { transactions } from "@/Database/Transaction";

type Transaction = {
    date: string;
    amount: number;
    status: "success" | "pending" | "failed";
    transactionId: string;
};

export default function WithdrawalTable() {
    const [pageSize, setPageSize] = useState(6);
    const [pageIndex, setPageIndex] = useState(0);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [globalFilter, setGlobalFilter] = useState("");

    // ✅ Columns
    const columns: ColumnDef<Transaction>[] = [
        {
            accessorKey: "date",
            header: () => <div className="text-left">Date</div>,
            cell: ({ row }) => (
                <span className="text-sm font-semibold text-[#2D2D2D]">
                    {row.original.date}
                </span>
            ),
        },
        {
            accessorKey: "amount",
            header: () => <div className="text-center">Amount</div>,
            cell: ({ row }) => (
                <div className="text-center font-medium">${row.original.amount}</div>
            ),
        },
        {
            accessorKey: "status",
            header: () => <div className="text-center">Status</div>,
            cell: ({ row }) => {
                const status = row.original.status;
                const color =
                    status === "success"
                        ? "bg-green-500 text-white"
                        : status === "pending"
                            ? "bg-yellow-500 text-white"
                            : "bg-red-500 text-white";
                return (
                    <p
                        className={`text-center px-2 md:w-1/2 mx-auto py-1 rounded-md font-medium capitalize ${color}`}
                    >
                        {status}
                    </p>
                );
            },
        },
        {
            accessorKey: "transactionId",
            header: () => <div className="text-center">Transaction ID</div>,
            cell: ({ row }) => (
                <div className="text-center text-sm">{row.original.transactionId}</div>
            ),
        },
    ];

    // ✅ Search Filter
    const filteredData = useMemo(() => {
        if (!globalFilter.trim()) return transactions;
        return transactions.filter(
            (t) =>
                t.date.toLowerCase().includes(globalFilter.toLowerCase()) ||
                t.transactionId.toLowerCase().includes(globalFilter.toLowerCase()) ||
                t.status.toLowerCase().includes(globalFilter.toLowerCase())
        );
    }, [globalFilter]);

    // ✅ Table setup
    const table = useReactTable({
        data: filteredData,
        columns,
        pageCount: Math.ceil(filteredData.length / pageSize),
        state: { pagination: { pageIndex, pageSize }, columnFilters, globalFilter },
        onPaginationChange: (updater) => {
            const newPagination =
                typeof updater === "function"
                    ? updater({ pageIndex, pageSize })
                    : updater;
            setPageIndex(newPagination.pageIndex);
            setPageSize(newPagination.pageSize);
        },
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    });

    return (
        <div className="w-full p-4 space-y-4">
            {/* ✅ Search Bar */}
            <div className="flex justify-between flex-wrap items-center gap-3">
                <div className="relative w-full sm:w-80">
                    <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search transactions..."
                        value={globalFilter}
                        onChange={(e) => setGlobalFilter(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-sm bg-[#F9FAFB]"
                    />
                </div>
            </div>

            {/* ✅ Table */}
            <DataTable
                columns={columns}
                data={table.getRowModel().rows.map((r) => r.original)}
            />

            {/* ✅ Results Count */}
            <div className="mt-2 text-sm text-center text-gray-400">
                Showing {table.getRowModel().rows.length} of {filteredData.length} results
            </div>

            {/* ✅ Pagination */}
            <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-4 mt-4">
                {/* Pagination Buttons */}
                <div className="flex flex-wrap justify-center items-center gap-2">
                    <Button
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                        className="rounded-full px-4 py-2"
                    >
                        <ChevronLeft />
                    </Button>

                    {(() => {
                        const totalPages = table.getPageCount();
                        const current = table.getState().pagination.pageIndex + 1;
                        const pages: (number | string)[] = [];

                        if (totalPages <= 7) for (let i = 1; i <= totalPages; i++) pages.push(i);
                        else if (current <= 4)
                            pages.push(1, 2, 3, 4, 5, "...", totalPages);
                        else if (current >= totalPages - 3)
                            pages.push(
                                1,
                                "...",
                                totalPages - 4,
                                totalPages - 3,
                                totalPages - 2,
                                totalPages - 1,
                                totalPages
                            );
                        else
                            pages.push(
                                1,
                                "...",
                                current - 1,
                                current,
                                current + 1,
                                "...",
                                totalPages
                            );

                        return pages.map((page, i) =>
                            page === "..." ? (
                                <span key={i} className="px-3 py-2 text-gray-500">
                                    ...
                                </span>
                            ) : (
                                <Button
                                    key={i}
                                    onClick={() => table.setPageIndex((page as number) - 1)}
                                    className={`px-4 py-2 border rounded-full ${current === page
                                        ? "bg-[#635BFF] text-white"
                                        : "bg-white text-black hover:bg-[#f3f3ff]"
                                        }`}
                                >
                                    {page}
                                </Button>
                            )
                        );
                    })()}

                    <Button
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                        className="rounded-full px-4 py-2"
                    >
                        <ChevronRight />
                    </Button>
                </div>

                {/* ✅ Page Size Selector */}
                <div className="flex flex-wrap justify-center items-center gap-2">
                    <p className="text-[#666666] text-sm md:text-base">Show per page</p>
                    <select
                        value={pageSize}
                        onChange={(e) => setPageSize(Number(e.target.value))}
                        className="border p-2 rounded-lg bg-[#F8F8F8] text-[#333333] font-medium text-sm md:text-base"
                    >
                        {[5, 10, 20].map((size) => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}
