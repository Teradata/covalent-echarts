import {
  ITdZoomTitles,
  ITdMagicAcceptedTypes,
  ITdDataView,
  ITdMagicType,
  ITdRestore,
  ITdSaveAsImage,
  ITdToolboxFeature,
} from '@covalent/echarts/toolbox';

export class LanguageDefaults {
  
  private dataZoomTitles: ITdZoomTitles = { zoom: 'Zoom', back: 'Back' };
  private dataViewTitle: string = 'View Data';
  private dataViewLang: string[] = ['data view', 'turn off', 'refresh'];
  private restoreTitle: string = 'Restore';
  private saveAsImageTitle: string = 'Save Image';
  private magicTypesAcceptedTitles: ITdMagicAcceptedTypes = {
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
   * @param zoomTitles: ITdZoomTitles
   * Checks for existing dataZoom.zoom, dataZoom.back || sets defaults to English.
   */
  public setDataZoom(zoomTitles: ITdZoomTitles): ITdZoomTitles {
    return zoomTitles
      ? {
          zoom: zoomTitles.zoom ? zoomTitles.zoom : this.dataZoomTitles.zoom,
          back: zoomTitles.back ? zoomTitles.back : this.dataZoomTitles.back,
        }
      : {
          zoom: this.dataZoomTitles.zoom,
          back: this.dataZoomTitles.back,
        };
  }
  
  /**
   *
   * @param magicType: ITdMagicType
   * Checks for existing magicType accepted titles || sets defaults to English.
   */
  public setMagicType(magicType: ITdMagicType): ITdMagicType {
    return magicType
      ? {
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
        }
      : { show: false };
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
      : { show: false };
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
      : { show: false };
  }

  /**
   * 
   * @param feature: ITdToolboxFeature
   * Checks all feature titles || sets defaults to English.
   */
  public setFeatureLang(feature: ITdToolboxFeature): ITdToolboxFeature {
    feature = {
      ...feature,
      dataZoom: feature.dataZoom ? {...feature.dataZoom} : {show: false},
    };
    return (feature = {
      ...feature,
      dataView: {
        ...feature.dataView,
        ...this.setViewDataLang(feature.dataView),
      },
      dataZoom: {
        ...feature.dataZoom,
        title: { ...this.setDataZoom(feature.dataZoom.title) },
      },
      magicType: {
        ...feature.magicType,
        ...this.setMagicType(feature.magicType),
      },
      restore: { ...feature.restore, ...this.setRestore(feature.restore) },
      saveAsImage: {
        ...feature.saveAsImage,
        ...this.setSaveAsImage(feature.saveAsImage),
      },
    });
  }
}
