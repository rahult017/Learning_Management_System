import $ from 'jquery';
import 'datatables.net/js/jquery.dataTables.min.js';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';

export function initializeDataTable(tableName) {
  $(tableName).DataTable();
}
