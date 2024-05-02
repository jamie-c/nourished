import { signOut } from "@/auth"
 
export function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button
        className="font-transat-med bg-nblg-500 rounded-md pt-5 pb-4 px-10 text-lg text-white hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
        type="submit">Sign Out</button>
    </form>
  )
}