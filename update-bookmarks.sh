python -m pip install --upgrade pip
pip install bkmks
bkmks -w ./.bkmks -b brave -o ./public/bookmarks.json
git add ./public/bookmarks.json
git commit -m "chore: updated bookmarks" -m "" -m "/spend 0m"
git push