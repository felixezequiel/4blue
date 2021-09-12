import { TableCustom, ThCustom, TheadCustom, TrCustom } from "./style"
import { TdUpdate } from "./td"

interface TableProps { 
  view: Array<string>,
  update?: boolean,
  [key: string]: any 
}
export const Table = ({ data, view, callback, update }: TableProps) => {
  return (
    <TableCustom>
      <TheadCustom>
        <TrCustom>
          {/* Obtem as colunas do cabecalho da tabela com base nas keys do objeto json */}
          {Object.keys(data[0] || []).filter(key => !view.length || view.indexOf(key) !== -1).map((keys, index) => (
            <ThCustom key={ index }>
              { keys[0].toUpperCase() + keys.slice(1).toLowerCase() }
            </ThCustom>
          ))}
        </TrCustom>
      </TheadCustom>
      <tbody>
        {/* Retorna uma linha para cada posicao do array */}
        {data.map((dt: any, key: number) => (
          <TrCustom 
            key={ key }
            onClick={ () => callback(dt.id) }
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
          </TrCustom>
        ))}
      </tbody>
    </TableCustom>
  )
}