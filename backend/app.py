from flask import Flask, render_template

app = Flask(
    __name__,
    static_url_path="",
    static_folder="../dist",
    template_folder="../dist"
)

@app.route("/api/testing")
def trending():
    return {"working": True}

# Passes web requests on to ReactJS build
@app.errorhandler(404)
def not_found(e):
    return render_template("index.html")
