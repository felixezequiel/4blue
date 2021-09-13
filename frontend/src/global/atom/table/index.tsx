import { useEffect, useState } from "react"
import { DeleteAddress, DeleteClients } from "../../../api"
import { Button } from "../button"
import { TableCustom, TdCustom, ThCustom, TheadCustom, TrCustom } from "./style"
import { TdUpdate } from "./td"

interface TableProps { 
  view: Array<string>,
  update?: boolean,
  [key: string]: any 
}
export const Table = ({ data, view, callback, update }: TableProps) => {
  const [ rows, setRows ] = useState(data)

  const handleDelete = async (id: number) => {
    await DeleteAddress({ id })
    await DeleteClients({ id })
    setRows((prevState: any) => ([ ...prevState.filter((prev: any) => prev.id !== id) ]))
  }

  useEffect(() => {
    setRows(data)
  }, [data])
  

  return (
    <TableCustom>
      <TheadCustom>
        <TrCustom>
          {/* Obtem as colunas do cabecalho da tabela com base nas keys do objeto json */}
          {Object.keys(rows[0] || []).filter(key => !view.length || view.indexOf(key) !== -1).map((keys, index) => (
            <ThCustom key={ index }>
              { keys[0].toUpperCase() + keys.slice(1).toLowerCase() }
            </ThCustom>
          ))}
          {update ? 
          <ThCustom>
            Action
          </ThCustom>
          :<></>}
        </TrCustom>
      </TheadCustom>
      <tbody>
        {/* Retorna uma linha para cada posicao do array */}
        {rows.map((dt: any, key: number) => (
          <TrCustom 
            key={ key }
            onDoubleClick={ () => callback ? callback(dt.id) : null }
          >
            {/* Cria as colunas de cada linha com base nas chaves do objeto json */}
            {Object.keys(dt).filter(key => !view.length || view.indexOf(key) !== -1).map((keys, index) => (
              <TdUpdate 
                key={ index }
                update={ update }
                value={ dt[keys] }
                id={ dt.id }
                column={ keys }
              />
            ))}
            {update ? 
            <TdCustom>
              <Button 
                text='Delete'
                type='button'
                onClick={ () => handleDelete(dt.id) }
              />
            </TdCustom> 
            :<></>}
          </TrCustom>
        ))}
      </tbody>
    </TableCustom>
  )
}