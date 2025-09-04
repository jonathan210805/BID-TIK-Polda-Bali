import { useForm } from '@inertiajs/react';
import React from 'react';

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.login.post'));
    };

    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit} className="w-96 rounded-lg bg-white p-6 shadow-lg">
                <h2 className="mb-4 text-center text-2xl font-bold">Login Admin</h2>

                <div className="mb-4">
                    <label className="mb-1 block text-sm">Email</label>
                    <input
                        type="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        className="w-full rounded-lg border px-3 py-2"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>

                <div className="mb-4">
                    <label className="mb-1 block text-sm">Password</label>
                    <input
                        type="password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        className="w-full rounded-lg border px-3 py-2"
                    />
                    {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
                </div>

                <button type="submit" disabled={processing} className="w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700">
                    {processing ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    );
}
