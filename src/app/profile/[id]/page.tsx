export default function UserProfile({params} : any) {
    return(
<div className="h-screen flex items-center justify-center min-h-screen py-2">
{/* <h1>Profile</h1> */}
<hr />
<p className="text-4xl">PORN <span className="p-2 rounded bg-orange-500 text-white ml-2">{params.id}</span></p>

</div>
)
}