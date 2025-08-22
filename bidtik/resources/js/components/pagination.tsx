import React, { useState } from 'react';

interface PaginationProps {
    totalPages: number;
    initialPage?: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, initialPage = 1 }) => {
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [showJump, setShowJump] = useState(false);
    const [jumpInput, setJumpInput] = useState('');

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    const handleJump = () => {
        const pageNum = parseInt(jumpInput, 10);
        if (!isNaN(pageNum)) {
            handlePageChange(pageNum);
        }
        setShowJump(false);
        setJumpInput('');
    };

    const renderPages = () => {
        const pages: (number | string)[] = [];

        if (totalPages <= 7) {
            // Kalau halamannya sedikit, tampil semua
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            if (currentPage <= 3) {
                // Awal
                pages.push(1, 2, 3, 4, '...', totalPages);
            } else if (currentPage >= totalPages - 2) {
                // Akhir
                pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                // Tengah
                pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }

        return pages.map((p, idx) => {
            if (p === '...') {
                return (
                    <button
                        key={idx}
                        onClick={() => setShowJump(true)}
                        className="rounded border bg-gray-200 px-3 py-1 text-gray-600 hover:bg-gray-300"
                    >
                        ...
                    </button>
                );
            }

            return (
                <button
                    key={p}
                    onClick={() => handlePageChange(Number(p))}
                    className={`rounded border px-3 py-1 transition ${
                        currentPage === p ? 'border-blue-500 bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                    {p}
                </button>
            );
        });
    };

    return (
        <div className="flex items-center gap-2">
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="rounded border px-3 py-1 disabled:opacity-50"
            >
                Prev
            </button>

            {renderPages()}

            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="rounded border px-3 py-1 disabled:opacity-50"
            >
                Next
            </button>

            {showJump && (
                <div className="bg-opacity-40 fixed inset-0 flex items-center justify-center bg-black">
                    <div className="space-y-3 rounded bg-white p-4 shadow-lg">
                        <p className="font-semibold">Jump to page:</p>
                        <input
                            type="number"
                            value={jumpInput}
                            onChange={(e) => setJumpInput(e.target.value)}
                            className="w-32 rounded border px-2 py-1"
                            min={1}
                            max={totalPages}
                        />
                        <div className="flex gap-2">
                            <button onClick={handleJump} className="rounded bg-blue-500 px-3 py-1 text-white">
                                Go
                            </button>
                            <button onClick={() => setShowJump(false)} className="rounded bg-gray-300 px-3 py-1">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Pagination;
