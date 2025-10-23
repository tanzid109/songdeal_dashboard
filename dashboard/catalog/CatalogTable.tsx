"use client";
import {
    ColumnDef,
    useReactTable,
    getCoreRowModel,
    getPaginationRowModel,
    getFilteredRowModel,
    ColumnFiltersState,
} from "@tanstack/react-table";
import Image from "next/image";
import { useState, useMemo } from "react";
import { data } from "@/Database/users";
import { Search, ChevronRight, ChevronLeft } from "lucide-react";
import { DataTable } from "@/Shared/Table/Table";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import CatalogView from "./CatalogView";

type User = {
    id: string;
    photo?: string;
    userId: number;
    catalog?: string;
    email: string;
    date?: string;
    time?: string;
    artist?: string;
    genre?: string;
    roi?: number;
    status: "live" | "pending";
};

export default function CatalogTable() {
    const [users, setUsers] = useState<User[]>(data);
    const [pageSize, setPageSize] = useState(6);
    const [pageIndex, setPageIndex] = useState(0);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [globalFilter, setGlobalFilter] = useState("");
    const [statusFilter, setStatusFilter] = useState<string>("all");
    const [genreFilter, setGenreFilter] = useState<string>("all");
    const [artistFilter, setArtistFilter] = useState<string>("all");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    const handleDelete = (user: User) => {
        setUsers((prev) => prev.filter((u) => u.userId !== user.userId));
    };

    const handleView = (user: User) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
    };

    const columns: ColumnDef<User>[] = [
        {
            accessorKey: "Catalog Title",
            cell: ({ row }) => (
                <div className="flex items-center gap-1 text-center">
                    <Image
                        src={row.original.photo ?? "/assets/user.jpg"}
                        alt={row.original.artist ?? "user"}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-md"
                    />
                    <span className="text-sm truncate font-semibold text-[#2D2D2D]">
                        {row.original.catalog}
                    </span>
                </div>
            ),
        },
        {
            accessorKey: "status",
            header: () => <div className="text-center">Status</div>,
            cell: ({ row }) => (
                <p
                    className={`text-center px-2 py-1 rounded-md font-normal ${row.original.status === "live"
                            ? "bg-[#DCFCE7]"
                            : "bg-[#EB433533] text-[#EB4335]"
                        }`}
                >
                    {row.original.status}
                </p>
            ),
        },
        {
            accessorKey: "date",
            header: () => <div className="text-center">Date</div>,
            cell: ({ row }) => (
                <div className="flex flex-col text-center">
                    <span>{row.original.date}</span>
                    <span>{row.original.time}</span>
                </div>
            ),
        },
        {
            accessorKey: "artist",
            header: () => <div className="text-center">Artist</div>,
            cell: ({ row }) => (
                <div className="flex flex-col text-center">
                    <span>{row.original.artist}</span>
                </div>
            ),
        },
        {
            accessorKey: "genre",
            header: () => <div className="text-center">Genre</div>,
            cell: ({ row }) => (
                <div className="flex flex-col text-center">
                    <span>{row.original.genre}</span>
                </div>
            ),
        },
        {
            accessorKey: "id",
            header: () => <div className="text-center">Funding Progress</div>,
            cell: ({ row }) => (
                <Progress value={row.original.roi} className="text-indigo-500 w-1/2 mx-auto" />
            ),
        },
        {
            accessorKey: "action",
            header: () => <div className="text-center">Action</div>,
            cell: ({ row }) => {
                const user = row.original;
                return (
                    <div className="flex items-center justify-center gap-4">
                        <button
                            className="bg-[#FDD26833] px-4 py-2 rounded-md flex items-center justify-center text-[#ffab02] hover:bg-[#faad14bd] hover:text-black transition cursor-pointer"
                            title="View"
                            onClick={() => handleView(user)}
                        >
                            <p>View</p>
                        </button>
                        <button
                            className="bg-[#FBD9D7] px-4 py-2 rounded-md flex items-center justify-center text-[#EB4335] hover:bg-[#eb4435ab] hover:text-black transition cursor-pointer    "
                            title="Delete"
                            onClick={() => handleDelete(user)}
                        >
                            <p>Delete</p>
                        </button>
                    </div>
                );
            },
        },
    ];

    // 🔍 Filtering logic
    const filteredData = useMemo(() => {
        let filtered = users;

        if (statusFilter !== "all") {
            filtered = filtered.filter((user) => user.status === statusFilter);
        }

        if (genreFilter !== "all") {
            filtered = filtered.filter(
                (user) => user.genre?.toLowerCase() === genreFilter.toLowerCase()
            );
        }

        if (artistFilter !== "all") {
            filtered = filtered.filter(
                (user) => user.artist?.toLowerCase() === artistFilter.toLowerCase()
            );
        }

        if (globalFilter) {
            const searchValue = globalFilter.toLowerCase();
            filtered = filtered.filter((user) =>
                [user.catalog, user.email, user.artist, user.genre, user.userId?.toString(), user.status, user.date]
                    .some((field) => field?.toString().toLowerCase().includes(searchValue))
            );
        }

        return filtered;
    }, [users, statusFilter, genreFilter, artistFilter, globalFilter]);

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
        onColumnFiltersChange: setColumnFilters,
        onGlobalFilterChange: setGlobalFilter,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    });

    // 🎨 Dynamic options (auto from dataset)
    const uniqueGenres = ["all", ...new Set(users.map((u) => u.genre).filter(Boolean))];
    const uniqueArtists = ["all", ...new Set(users.map((u) => u.artist).filter(Boolean))];

    return (
        <div>
            {/* Search & Filters */}
            <div className="shadow p-6 bg-white flex flex-col md:flex-row justify-between items-center my-6 rounded-t-2xl gap-4">
                {/* Search Input */}
                <div className="relative w-full md:w-auto">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Search users..."
                        value={globalFilter}
                        onChange={(e) => {
                            setGlobalFilter(e.target.value);
                            setPageIndex(0);
                        }}
                        className="bg-[#F9F9FB] shadow rounded-full py-2 pl-10 pr-8 text-gray-700 focus:ring-2 focus:ring-[#635BFF] focus:outline-none cursor-pointer w-full md:w-80"
                    />
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center md:justify-end items-center gap-3 w-full md:w-auto">
                    {/* Status Filter */}
                    <select
                        value={statusFilter}
                        onChange={(e) => {
                            setStatusFilter(e.target.value);
                            setPageIndex(0);
                        }}
                        className="bg-[#F9F9FB] shadow rounded-full py-2 pl-4 pr-8 text-gray-700 focus:ring-2 focus:ring-[#635BFF] focus:outline-none cursor-pointer w-full sm:w-auto"
                    >
                        <option value="all">All Status</option>
                        <option value="live">Live</option>
                        <option value="pending">Pending</option>
                    </select>

                    {/* Genre Filter */}
                    <select
                        value={genreFilter}
                        onChange={(e) => {
                            setGenreFilter(e.target.value);
                            setPageIndex(0);
                        }}
                        className="bg-[#F9F9FB] shadow rounded-full py-2 pl-4 pr-8 text-gray-700 focus:ring-2 focus:ring-[#635BFF] focus:outline-none cursor-pointer w-full sm:w-auto"
                    >
                        {uniqueGenres.map((g) => (
                            <option key={g} value={g}>
                                {g === "all" ? "All Genres" : g}
                            </option>
                        ))}
                    </select>

                    {/* Artist Filter */}
                    <select
                        value={artistFilter}
                        onChange={(e) => {
                            setArtistFilter(e.target.value);
                            setPageIndex(0);
                        }}
                        className="bg-[#F9F9FB] shadow rounded-full py-2 pl-4 pr-8 text-gray-700 focus:ring-2 focus:ring-[#635BFF] focus:outline-none cursor-pointer w-full sm:w-auto"
                    >
                        {uniqueArtists.map((a) => (
                            <option key={a} value={a}>
                                {a === "all" ? "All Artists" : a}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Table */}
            <DataTable
                columns={columns}
                data={table.getRowModel().rows.map((row) => row.original)}
            />

            {/* Modal */}
            {isModalOpen && selectedUser && (
                <CatalogView user={selectedUser} onClose={closeModal} />
            )}

            {/* Results */}
            <div className="mt-2 text-sm text-center text-gray-400">
                Showing {table.getRowModel().rows.length} of {filteredData.length} results
            </div>

            {/* Pagination */}
            <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-4 mt-4">
                {/* Pagination Controls */}
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
                        const currentPage = table.getState().pagination.pageIndex + 1;
                        const pages: (number | string)[] = [];

                        if (totalPages <= 7) {
                            for (let i = 1; i <= totalPages; i++) pages.push(i);
                        } else {
                            if (currentPage <= 4) {
                                pages.push(1, 2, 3, 4, 5, "...", totalPages);
                            } else if (currentPage >= totalPages - 3) {
                                pages.push(
                                    1,
                                    "...",
                                    totalPages - 4,
                                    totalPages - 3,
                                    totalPages - 2,
                                    totalPages - 1,
                                    totalPages
                                );
                            } else {
                                pages.push(
                                    1,
                                    "...",
                                    currentPage - 1,
                                    currentPage,
                                    currentPage + 1,
                                    "...",
                                    totalPages
                                );
                            }
                        }

                        return pages.map((page, index) => {
                            if (page === "...") {
                                return (
                                    <span key={index} className="px-3 py-2 text-gray-500">
                                        ...
                                    </span>
                                );
                            }
                            const isActive = currentPage === page;
                            return (
                                <Button
                                    key={index}
                                    onClick={() => table.setPageIndex((page as number) - 1)}
                                    className={`px-4 py-2 border rounded-full ${isActive
                                            ? "bg-[#635BFF] text-white"
                                            : "bg-white text-black hover:bg-[#f3f3ff]"
                                        }`}
                                >
                                    {page}
                                </Button>
                            );
                        });
                    })()}

                    <Button
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                        className="rounded-full px-4 py-2"
                    >
                        <ChevronRight />
                    </Button>
                </div>

                {/* Page Size Selector */}
                <div className="flex flex-wrap justify-center items-center gap-2">
                    <p className="text-[#666666] text-sm md:text-base">Show per page</p>
                    <select
                        value={table.getState().pagination.pageSize}
                        onChange={(e) => table.setPageSize(Number(e.target.value))}
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