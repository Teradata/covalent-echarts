import { Component, OnInit } from '@angular/core';
import { TdMediaService } from '@covalent/core/media';
@Component({
  selector: 'app-chart-types-docs',
  templateUrl: './chart-types-docs.component.html',
  styleUrls: ['./chart-types-docs.component.scss'],
})
export class ChartTypesDocsComponent implements OnInit {
  routes: Object[] = [
    {
      description: 'List of all examples including in the documentation',
      icon: 'picture_in_picture',
      route: '.',
      title: 'Chart Types',
    },
    {
      description: 'Amotic and Config Options',
      icon: 'view_list',
      route: 'bar',
      title: 'Bar',
    },
    {
      description: 'Amotic and Config Options',
      icon: 'open_with',
      route: 'line',
      title: 'Line',
    },
    {
      description: 'Amotic and Config Options',
      icon: 'space_bar',
      route: 'scatter',
      title: 'Scatter',
    },
    {
      description: 'Amotic and Config Options',
      icon: 'attach_file',
      route: 'file-upload',
      title: 'NPath',
    },
  ];

  external: Object[] = [
    {
      description: 'i18n library',
      icon: 'language',
      route: 'ngx-translate',
      title: 'NGX-Translate',
    },
  ];

  constructor(private media: TdMediaService) {}

  ngOnInit() {}
}
