export default class Util {
  /**
   * Método responsável por ler um arquivo e retorma uma Promise do arquivo.
   *
   * @param {*} inputFile
   */
  static readUploadedFileAsText(inputFile) {
    const temporaryFileReader = new FileReader();

    return new Promise((resolve, reject) => {
      temporaryFileReader.onerror = () => {
        temporaryFileReader.abort();
        reject();
      };

      if (inputFile) {
        temporaryFileReader.readAsDataURL(inputFile);
        temporaryFileReader.onload = () => {
          resolve(temporaryFileReader.result);
        };
      }
    });
  }
}
