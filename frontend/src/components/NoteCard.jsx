import { PenSquareIcon, Trash2Icon } from "lucide-react"
import { Link } from "react-router"
import { formatDate } from "../lib/utils"
import toast from "react-hot-toast"
import api from "../lib/axios"

export default function NoteCard({note, setNotes}) {
  const handleDelete = async (e, id)=>{
    e.preventDefault()
    if(!window.confirm("Are you sure you want to delete this note?")) return
    try {
        await  api.delete(`/notes/${id}`)
        setNotes (prev=>prev.filter(note=> note._id !== id))
         toast.success("Note delete succesfully")
    } catch (error) {
        console.log("error delete", error);
        toast.error("can not delete this note")
    }
  }


  return (
    <Link to={`/note/${note._id}`}>
    <div
        className="card bg-base-100 hover:shadow-lg transition-all duration-200
                   border-t-4 border-solid border-[#00FF9D]"
      >
      <div className="card-body">
        <h3 className="card-title text-base-content">{note.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{note.content?.slice(0, 80)}...</p>
      </div>
        <div className="card-actions justify-between items-center mt-4">
       <span className="text-sm to-base-content/60">
       {formatDate(note.createdAt)}</span>
       <div className="flex items-center gap-1">
       <PenSquareIcon className="size-4" />
       <button className="btn btn-ghost btn-xs text-error">
        <Trash2Icon className="size-4" onClick={(e)=>handleDelete(e, note._id)}/>
       </button>

       </div>
        </div>
      </div>
    </Link>
  )
}
