import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Head } from '@inertiajs/react';

interface Contact {
    id: number;
    name: string;
    whatsapp: string;
    link: string;
}

interface ContactPageProps {
    contacts: Contact[];
}

const ContactPage: React.FC<ContactPageProps> = ({ contacts }) => {
    return (
        <>
            <Head title="Kontak - TIK POLDA BALI" />
            <div className="flex min-h-screen flex-col bg-gray-50">
                <Navbar />

                <main className="mx-auto w-[80%] flex-grow px-4 py-8">
                    <h1 className="mb-6 text-2xl font-bold text-gray-800">Daftar Kontak WhatsApp Polres/Polda</h1>
                    <div className="overflow-x-auto rounded-lg shadow">
                        <table className="w-full border-collapse text-sm">
                            <thead>
                                <tr className="bg-yellow-500 text-white">
                                    <th className="px-4 py-3 text-center">Link WhatsApp Chat</th>
                                    <th className="px-4 py-3 text-center">Nomor WhatsApp Hotline</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact) => (
                                    <tr key={contact.id} className="text-center odd:bg-white even:bg-gray-100 hover:bg-gray-200">
                                        <td className="px-4 py-3 font-semibold text-red-600">
                                            <a href={contact.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                                {contact.name}
                                            </a>
                                        </td>
                                        <td className="px-4 py-3 font-mono text-gray-800">{contact.whatsapp}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
};

export default ContactPage;
