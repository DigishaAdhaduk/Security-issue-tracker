export default function IssueBox({ item, onDel, onEdit }: any) {
  function change(e: any) {
    onEdit(item.id, { status: e.target.value })
  }

  return (
    <div style={{ border: "1px solid #444", padding: 8, marginBottom: 8 }}>
      <b>{item.title}</b>
      <p>{item.desc}</p>

      <select value={item.status || ""} onChange={change}>
        <option value="">open</option>
        <option value="working">working</option>
        <option value="done">done</option>
      </select>

      <br />

      <button onClick={() => onDel(item.id)}>delete</button>
    </div>
  )
}
