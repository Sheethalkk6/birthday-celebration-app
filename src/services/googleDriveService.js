const {google} = require('googleapis');

class GoogleDriveService {
    constructor(auth) {
        this.drive = google.drive({ version: 'v3', auth });
    }

    async fetchTextFiles() {
        const res = await this.drive.files.list({
            q: "mimeType='text/plain'",
            fields: 'files(id, name)',
        });
        return res.data.files;
    }

    async searchTextFiles(query) {
        const res = await this.drive.files.list({
            q: `mimeType='text/plain' and name contains '${query}'`,
            fields: 'files(id, name)',
        });
        return res.data.files;
    }
}

module.exports = GoogleDriveService;