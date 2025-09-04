import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const generatePageNumbers = () => {
        // Pastikan totalPages adalah angka yang valid sebelum melanjutkan
        if (!totalPages || totalPages <= 0) {
            return [];
        }

        // Jika total halaman sedikit (7 atau kurang), tampilkan semua
        if (totalPages <= 7) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        // Jika halaman aktif ada di awal (halaman 1 sampai 4)
        if (currentPage <= 4) {
            return [1, 2, 3, 4, 5, '...', totalPages];
        }

        // Jika halaman aktif ada di akhir (3 halaman terakhir)
        if (currentPage >= totalPages - 3) {
            return [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
        }

        // Default: Jika halaman aktif ada di tengah
        // Menampilkan: 1, ..., [sebelumnya], [saat ini], [berikutnya], ..., [terakhir]
        return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
    };

    /**
     * Fungsi yang mengatur ketika tombol '...' ditekan.

     */
    const handleJumpToPage = () => {
        const pageString = prompt(`Lompat ke halaman (1 - ${totalPages}):`);
        if (pageString) {
            const page = parseInt(pageString, 10);
            // Validasi input untuk memastikan nomor halaman valid
            if (!isNaN(page) && page >= 1 && page <= totalPages) {
                onPageChange(page);
            } else {
                alert('Nomor halaman tidak valid!');
            }
        }
    };

    const pageNumbers = generatePageNumbers();

    return (
        <div className="mt-10 flex items-center justify-center space-x-2">
            {/* Tombol "Sebelumnya" */}
            <button
                onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                className="rounded-md border px-3 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
            >
                «
            </button>

            {/* Nomor Halaman */}
            {pageNumbers.map((page, i) =>
                page === '...' ? (
                    // Mengatur tombol '...' untuk lompat ke halaman pilihan
                    <button key={`ellipsis-${i}`} onClick={handleJumpToPage} className="rounded-md border px-3 py-1 text-gray-500 hover:bg-gray-100">
                        ...
                    </button>
                ) : (
                    // Jika item adalah nomor halaman
                    <button
                        key={page}
                        onClick={() => onPageChange(Number(page))}
                        className={`rounded-md border px-3 py-1 ${
                            currentPage === page
                                ? 'border-blue-600 bg-blue-600 text-white' // Style untuk halaman aktif
                                : 'text-gray-600 hover:bg-gray-100' // Style untuk halaman tidak aktif
                        }`}
                    >
                        {page}
                    </button>
                ),
            )}

            {/* Tombol "Berikutnya" */}
            <button
                onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="rounded-md border px-3 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
            >
                »
            </button>
        </div>
    );
};

export default Pagination;
