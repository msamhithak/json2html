export default function json2html(data) {
    // Define table headers
    const headers = ['Name', 'Age', 'Gender'];
  
    // Start building the HTML table as a string
    let html = '<table data-user="msamhithakumar@gmail.com">\n';
    html += '  <thead>\n    <tr>';
  
    // Add headers to the table
    headers.forEach(header => {
      html += `<th>${header}</th>`;
    });
    html += '</tr>\n  </thead>\n';
  
    // Add table rows from the data
    html += '  <tbody>\n';
    data.forEach(row => {
      html += '    <tr>';
      headers.forEach(header => {
        html += `<td>${row[header] || ''}</td>`; // Use empty cell if data is missing
      });
      html += '</tr>\n';
    });
    html += '  </tbody>\n</table>';
  
    // Return the final HTML table as a string
    return html;
  }
  