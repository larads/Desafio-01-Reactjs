import { FileText } from "lucide-react";

export function Empty() {
  return (
    <div className="flex flex-1 items-center justify-between flex-col m-5">
      <FileText size={52} color='white'/>
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <br />
          Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
}
