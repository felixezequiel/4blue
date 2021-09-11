interface TableProps { 
  view: Array<string>, 
  [key: string]: any 
}
export const Table = ({ data, view, callback }: TableProps) => {
  return (
    <table>
      <thead>
        <tr>
          {/* Obtem as colunas do cabecalho da tabela com base nas keys do objeto json */}
          {Object.keys(data[0] || []).filter(key => !view.length || view.indexOf(key) !== -1).map((keys, index) => (
            <th key={ index }>
              { keys }
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* Retorna uma linha para cada posicao do array */}
        {data.map((dt: any, key: number) => (
          <tr 
            key={ key }
            onClick={ () => callback(dt.id) }
          >
            {/* Cria as colunas de cada linha com base nas chaves do objeto json */}
            {Object.keys(dt).filter(key => !view.length || view.indexOf(key) !== -1).map((keys, index) => (
              <td key={ index }>
                { dt[keys] }
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}