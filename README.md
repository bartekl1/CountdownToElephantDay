# Strona Odliczanie do Dnia Słonia

Strona jest dostępna [tutaj](https://iledodniaslonia.pythonanywhere.com/).

---

## Uruchamianie strony
1. Do uruchomienia strony wymagany jest Python w wersji 3.
2. Sklonuj kod strony.
```bash
git clone https://github.com/slonindyjski/OdliczanieDoDniaSloniaStrona.git
```
3. Zainstaluj wymagane biblioteki Python (Flask, MySQL Connector, pytz).
```bash
pip install -r requirements.txt
```
4. Utwórz bazę danych oraz tabelę wymaganą przez licznik odwiedzin.
```sql
CREATE DATABASE nazwa_bazy_danych;
CREATE TABLE visits (
    visits int
);
INSERT INTO visits VALUES (0);
```
5. Dodaj konfigurację bazy danych do pliku `app.py`.
6. Uruchom plik `app.py`.
- Windows
```bash
py app.py
```
- Linux
```bash
python3 app.py
```