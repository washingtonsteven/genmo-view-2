import React from "react";

export default ({ table: { headings, body } }) => (
  <table>
    {headings && (
      <thead>
        <tr>
          {headings.map(heading => (
            <th scope="col" key={heading}>
              {heading}
            </th>
          ))}
        </tr>
      </thead>
    )}
    {body && (
      <tbody>
        {body.map(row => (
          <tr key={row.join("")}>
            {row.map(cell => (
              <td key={cell}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    )}
  </table>
);

/*

Data structure

heading (columns listing)

body

{
  headings: [col1, col2, col3]
  body: [
    [cell1, cell2, cell3],
    [cell1, cell2, cell3],
    [cell1, cell2, cell3],
  ]
}

BLOG:
Okay so....thead/tbody td/th...and scope?!?!

BLOG:
Inline blog post notes...highlights with TODO Highlight

*/
