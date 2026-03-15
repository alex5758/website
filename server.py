from http.server import SimpleHTTPRequestHandler
import socketserver
import os  
PORT = int(os.environ.get("PORT", 8000))
Handler = SimpleHTTPRequestHandler
with socketserver.TCPServer(("", PORT), Handler) as httpd:
	print("Server running")
	httpd.serve_forever()
