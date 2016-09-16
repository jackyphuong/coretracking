import { Component  } from '@angular/core';
import {GridOptions} from 'ag-grid/main';

import RefData from '../mockData';

@Component({
    templateUrl: 'client/administration/auditlog.component.html'
})

export class AuditLogComponent {
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
            var countryData = RefData.countries[i % RefData.countries.length];
            rowData.push({
                name: RefData.firstNames[i % RefData.firstNames.length] + ' ' + RefData.lastNames[i % RefData.lastNames.length],
                skills: {
                    android: Math.random() < 0.4,
                    html5: Math.random() < 0.4,
                    mac: Math.random() < 0.4,
                    windows: Math.random() < 0.4,
                    css: Math.random() < 0.4
                },
                address: RefData.addresses[i % RefData.addresses.length],
                years: Math.round(Math.random() * 100),
                proficiency: Math.round(Math.random() * 100),
                country: countryData.country,
                continent: countryData.continent,
                language: countryData.language,
                mobile: createRandomPhoneNumber(),
                landline: createRandomPhoneNumber()
            });
        }

        this.rowData = rowData;
    }

    private createColumnDefs() {
        this.columnDefs = [
            {
                headerName: '#', width: 30, checkboxSelection: true, suppressSorting: true,
                suppressMenu: true, pinned: true
            },
            {
                headerName: 'Employee',
                children: [
                    {
                        headerName: "Name", field: "name",
                        width: 150, pinned: true
                    },
                    {
                        headerName: "Country", field: "country", width: 150,
                        cellRenderer: countryCellRenderer, pinned: true,
                        filterParams: { cellRenderer: countryCellRenderer, cellHeight: 20 }
                    },
                ]
            },
            {
                headerName: 'IT Skills',
                children: [
                    {
                        headerName: "Skills",
                        width: 125,
                        suppressSorting: true,
                        cellRenderer: skillsCellRenderer,
                        // filter: SkillFilter
                    },
                    {
                        headerName: "Proficiency",
                        field: "proficiency",
                        width: 120,
                        cellRenderer: percentCellRenderer,
                        // filter: ProficiencyFilter
                    },
                ]
            },
            {
                headerName: 'Contact',
                children: [
                    { headerName: "Mobile", field: "mobile", width: 150, filter: 'text' },
                    { headerName: "Land-line", field: "landline", width: 150, filter: 'text' },
                    { headerName: "Address", field: "address", width: 500, filter: 'text' }
                ]
            }
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

function skillsCellRenderer(params) {
    var data = params.data;
    var skills = [];
    RefData.IT_SKILLS.forEach(function (skill) {
        if (data && data.skills && data.skills[skill]) {
            skills.push('<img src="/images/skills/' + skill + '.png" width="16px" title="' + skill + '" />');
        }
    });
    return skills.join(' ');
}

function countryCellRenderer(params) {
    var flag = "<img border='0' width='15' height='10' style='margin-bottom: 2px' src='../images/flags/" + RefData.COUNTRY_CODES[params.value] + ".png'>";
    return flag + " " + params.value;
}

function createRandomPhoneNumber() {
    var result = '+';
    for (var i = 0; i < 12; i++) {
        result += Math.round(Math.random() * 10);
        if (i === 2 || i === 5 || i === 8) {
            result += ' ';
        }
    }
    return result;
}

function percentCellRenderer(params) {
    var value = params.value;

    var eDivPercentBar = document.createElement('div');
    eDivPercentBar.className = 'div-percent-bar';
    eDivPercentBar.style.width = value + '%';
    if (value < 20) {
        eDivPercentBar.style.backgroundColor = 'red';
    } else if (value < 60) {
        eDivPercentBar.style.backgroundColor = '#ff9900';
    } else {
        eDivPercentBar.style.backgroundColor = '#00A000';
    }

    var eValue = document.createElement('div');
    eValue.className = 'div-percent-value';
    eValue.innerHTML = value + '%';

    var eOuterDiv = document.createElement('div');
    eOuterDiv.className = 'div-outer-div';
    eOuterDiv.appendChild(eValue);
    eOuterDiv.appendChild(eDivPercentBar);

    return eOuterDiv;
}