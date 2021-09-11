import { TableCustom, TdCustom, ThCustom, TheadCustom, TrCustom } from "./style"

interface TableProps { 
  view: Array<string>, 
  [key: string]: any 
}
export const Table = ({ data, view, callback }: TableProps) => {
  return (
    <TableCustom>
      <TheadCustom>
        <TrCustom>
          {/* Obtem as colunas do cabecalho da tabela com base nas keys do objeto json */}
          {Object.keys(data[0] || []).filter(key => !view.length || view.indexOf(key) !== -1).map((keys, index) => (
            <ThCustom key={ index }>
              { keys }
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
              <TdCustom key={ index }>
                { dt[keys] }
              </TdCustom>
            ))}
          </TrCustom>
        ))}
      </tbody>
    </TableCustom>
  )
}