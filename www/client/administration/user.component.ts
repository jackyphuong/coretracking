import { Component  } from '@angular/core';
import {GridOptions} from 'ag-grid/main';

import UserMock from '../mockdata/refdata.mock';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'client/administration/user.component.html'
})

export class UsersComponent {
    private gridOptions: GridOptions;
    private showGrid: boolean;
    private rowData: any[];
    private columnDefs: any[];
    private rowCount: string;

    constructor() {
        // we pass an empty gridOptions in, so we can grab the api out
        this.gridOptions = <GridOptions>{};
        this.createRowData();
        this.createColumnDefs();
        this.showGrid = true;
    }

    private createRowData() {
        var rowData: any[] = [];

        for (var i = 0; i < 10000; i++) {
            var firstName = UserMock.firstNames[i % UserMock.firstNames.length];
            var lastName = UserMock.lastNames[i % UserMock.lastNames.length];

            rowData.push({
                 name: firstName + ' ' + lastName,
                 address: UserMock.addresses[i % UserMock.addresses.length],
                 email: firstName.toLowerCase() + '.' + lastName.toLowerCase() + UserMock.domains[i % UserMock.domains.length],
                 joinDate: new Date().toDateString(),
                 role: UserMock.roles[i % UserMock.roles.length],
                 status: UserMock.status[i % UserMock.status.length]
            });
        }

        this.rowData = rowData;
    }

    private createColumnDefs() {
        this.columnDefs = [
            { headerName: '#', width: 30, checkboxSelection: true, suppressSorting: true, suppressMenu: true,
              pinned: true },
            {   headerName: "Name", field: "name", width: 145 },
            {   headerName: "Email", field: "email", width: 200 },
            {   headerName: "Address", field: "address", width: 400, filter: 'text' },
            {   headerName: "Join Date", field: "joinDate", width: 100 },
            {   headerName: "Role", field: "role", width: 100 },
            {   headerName: "Status", width: 70, cellRenderer: statusCellRenderer, }
        ];
    }

    private onReady() {
        console.log('onReady');
        this.calculateRowCount();
    }

    private onRowSelected($event) {
        // taking out, as when we 'select all', it prints to much to the console!!
        console.log('onRowSelected: ' + $event.node.data.name);
    }

    private onRowClicked($event) {
        console.log('onRowClicked: ' + $event.node.data.name);
    }

    private calculateRowCount() {
        if (this.gridOptions.api && this.rowData) {
            var model = this.gridOptions.api.getModel();
            var totalRows = this.rowData.length;
            var processedRows = model.getRowCount();
            this.rowCount = processedRows.toLocaleString() + ' / ' + totalRows.toLocaleString();
        }
    }
}

function statusCellRenderer(params) {
    var map: { [status: string]: string; } = { };
    map["Active"] = "tag-success";
    map["Banned"] = "tag-danger";
    map["Inactive"] = "tag-default";
    map["Pending"] = "tag-warning";

    var status = "<span class='tag "+ map[params.data.status] +"'>" + params.data.status + "</span>";
    return status;
}
