const fs = require('fs')
const path = require('path')

// Return my pdf resume, or an error if one occurs
exports.handler = async (event, context) => {
  try {
    const resumeFilename = "/assets/AdamPrunerResume.pdf"
    const resumeFilepath = path.join(__dirname, resumeFilename)
    const resumeBitmapFile = fs.readFileSync(resumeFilepath)
    return {
      statusCode: 200,
      body: new Buffer(resumeBitmapFile).toString('base64'),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment"
      },
      isBase64Encoded: true
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
