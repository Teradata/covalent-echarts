import {
  ITdZoomTitles,
  ITdAcceptedMagicTypes,
  ITdDataView,
  ITdMagicType,
  ITdRestore,
  ITdSaveAsImage,
  ITdToolboxFeature,
  ITdAcceptedBrushTypes,
  ITdBrush,
  ITdDataZoom,
} from '@covalent/echarts/toolbox';

export class LanguageDefaults {
  
  private burshTitles: ITdAcceptedBrushTypes = {
    rect: 'Rectangle selection',
    polygon: 'Polygon selection',
    lineX: 'Horizontal selection',
    lineY: 'Vertical selection',
    keep: 'Keep previous selection',
    clear: 'Clear selection',
  };
  private dataZoomTitles: ITdZoomTitles = { zoom: 'Zoom', back: 'Back' };
  private dataViewTitle: string = 'View Data';
  private dataViewLang: string[] = ['data view', 'turn off', 'refresh'];
  private restoreTitle: string = 'Restore';
  private saveAsImageTitle: string = 'Save Image';
  private magicTypesAcceptedTitles: ITdAcceptedMagicTypes = {
    line: 'Line Chart',
    bar: 'Bar Chart',
    stack: 'Stack',
    tiled: 'Tiled',
  };

  /**
   *
   * @param dataView: ITdDataView
   * Checks for existing dataView.lang: string[] || sets defaults to English.
   * There are 3 names in dataView.lang, others will be ignored bny echarts.
   */
  public setViewDataLang(dataView: ITdDataView): ITdDataView {
    let newLangArray: string[] = [];
    if (dataView) {
      if (dataView.lang) {
        newLangArray = this.dataViewLang.map(
          (item: string, i: number, array: string[]) => {
            return dataView.lang[i] && item !== dataView.lang[i]
              ? dataView.lang[i]
              : item;
          },
        );
      } else {
        newLangArray = this.dataViewLang;
      }
      return {
        lang: newLangArray,
        title: dataView && dataView.title ? dataView.title : this.dataViewTitle,
      };
    } else {
      return { show: false };
    }
  }

  /**
   *
   * @param dataZoom: ITdDataZoom
   * Checks for existing dataZoom.zoom, dataZoom.back || sets defaults to English.
   */
  public setDataZoom(dataZoom: ITdDataZoom): ITdDataZoom {
    if (dataZoom) {
      return dataZoom.title ? {
        ...dataZoom,
        title: {
          zoom: dataZoom.title.zoom ? dataZoom.title.zoom : this.dataZoomTitles.zoom,
          back: dataZoom.title.back ? dataZoom.title.back : this.dataZoomTitles.back,
        },
      } : {
          title: {
            zoom: this.dataZoomTitles.zoom,
            back: this.dataZoomTitles.back,
          },
        };
    }
  }
  
  /**
   *
   * @param magicType: ITdMagicType
   * Checks for existing magicType accepted titles || sets defaults to English.
   */
  public setMagicType(magicType: ITdMagicType): ITdMagicType {
    if (magicType) {
      return magicType.title ? {
          ...magicType,
          title: {
            line: magicType.title.line
              ? magicType.title.line
              : this.magicTypesAcceptedTitles.line,
            bar: magicType.title.bar
              ? magicType.title.bar
              : this.magicTypesAcceptedTitles.bar,
            stack: magicType.title.stack
              ? magicType.title.stack
              : this.magicTypesAcceptedTitles.stack,
            tiled: magicType.title.tiled
              ? magicType.title.tiled
              : this.magicTypesAcceptedTitles.tiled,
          },
        } : {
          ...magicType,
          title: {
            line: this.magicTypesAcceptedTitles.line,
            bar: this.magicTypesAcceptedTitles.bar,
            stack: this.magicTypesAcceptedTitles.stack,
            tiled: this.magicTypesAcceptedTitles.tiled,
          },
        };
    } else {
      return undefined;
      }
  }

  /**
   *
   * @param brush: ITdBrush
   * Checks for existing ITdBrush accepted titles || sets defaults to English.
   */
  public setBrush(brush: ITdBrush): ITdBrush {
    if (brush) {
      return brush.title ? {
          ...brush,
          title: {
            rect: brush.title.rect
              ? brush.title.rect
              : this.burshTitles.rect,
            polygon: brush.title.polygon
              ? brush.title.polygon
              : this.burshTitles.polygon,
            lineX: brush.title.lineX
              ? brush.title.lineX
              : this.burshTitles.lineX,
            lineY: brush.title.lineY
              ? brush.title.lineY
              : this.burshTitles.lineY,
            keep: brush.title.keep
              ? brush.title.keep
              : this.burshTitles.keep,
            clear: brush.title.clear
              ? brush.title.clear
              : this.burshTitles.clear,
          },
        } : {
          ...brush,
          title: {
            rect: this.burshTitles.rect,
            polygon: this.burshTitles.polygon,
            lineX: this.burshTitles.lineX,
            lineY: this.burshTitles.lineY,
            keep: this.burshTitles.keep,
            clear: this.burshTitles.clear,
          },
        };
    } else {
      return {
        ...brush,
        title: {
          rect: this.burshTitles.rect,
          polygon: this.burshTitles.polygon,
          lineX: this.burshTitles.lineX,
          lineY: this.burshTitles.lineY,
          keep: this.burshTitles.keep,
          clear: this.burshTitles.clear,
        },
      };
      }
  }

  /**
   *
   * @param restore: ITdRestore
   * Checks for existing restore titles || sets defaults to English.
   */
  public setRestore(restore: ITdRestore): ITdRestore {
    return restore
      ? {
          title: restore.title ? restore.title : this.restoreTitle,
        }
      : undefined;
  }

  /**
   *
   * @param saveAsImage: ITdSaveAsImage
   * Checks for existing saveAsImage titles || sets defaults to English.
   */
  public setSaveAsImage(saveAsImage: ITdSaveAsImage): ITdSaveAsImage {
    return saveAsImage
      ? {
          title: saveAsImage.title ? saveAsImage.title : this.saveAsImageTitle,
        }
      : undefined;
  }

  /**
   * 
   * @param feature: ITdToolboxFeature
   * Checks all feature titles || sets defaults to English.
   */
  public setFeatureLang(feature: ITdToolboxFeature): ITdToolboxFeature {
    
    if (feature.dataZoom) {
      feature.dataZoom = { ...feature.dataZoom, ...this.setDataZoom(feature.dataZoom)};
    } 
    if (feature.brush) {
    feature.brush = { ...feature.brush, ...this.setBrush(feature.brush)};
    } 
    if (feature.magicType) {
      feature.magicType = { ...feature.magicType, ...this.setMagicType(feature.magicType)};
    } 
    if (feature.dataView) {
      feature.dataView = { ...feature.dataView, ...this.setViewDataLang(feature.dataView)};
    } 
    if (feature.restore) {
      feature.restore = { ...feature.restore, ...this.setRestore(feature.restore)};
    } 
    if (feature.saveAsImage) {
      feature.saveAsImage = { ...feature.saveAsImage, ...this.setSaveAsImage(feature.saveAsImage)};
    } 
    return feature = {...feature};
  }
}
