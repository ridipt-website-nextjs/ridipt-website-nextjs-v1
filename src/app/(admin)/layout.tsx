// app/(admin)/layout.tsx               ⬅️ server component (no "use client")
import { redirect, RedirectType } from 'next/navigation'
import { isAdminUser } from '@/lib/helper-functions'   // <- must stay async-/server-safe


export default async function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    /* helper returns true/false after reading the cookie,
       hitting /api/verify-token, DB, etc. */
    const isAdmin = await isAdminUser()

    /* - If the current visitor is NOT an admin, stop rendering the
       segment and push them to the home page.                      */
    if (!isAdmin) {
        // push = keep previous page in history-stack (good for “back”)
        redirect('/', RedirectType.push)        // never returns
    }

    /* - Otherwise render the protected admin UI */
    return <>{children}</>
}
