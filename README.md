# Strona Odliczanie do Dnia Słonia

Strona jest dostępna [tutaj](https://iledodniaslonia.pythonanywhere.com/).

---

## Uruchamianie strony
1. Do uruchomienia strony wymagany jest Python w wersji 3 oraz MySQL.
2. Sklonuj kod strony i przejdź do folderu, do którego został on sklonowany.
```bash
git clone https://github.com/slonindyjski/OdliczanieDoDniaSloniaStrona.git
cd OdliczanieDoDniaSloniaStrona
```
3. Zainstaluj wymagane biblioteki Python.
```bash
pip install -r requirements.txt
```
4. Utwórz bazę danych oraz tabelę wymaganą przez licznik odwiedzin.
```sql
CREATE DATABASE OdliczanieDoDniaSlonia;
USE OdliczanieDoDniaSlonia;
CREATE TABLE visits (
    visits int
);
INSERT INTO visits VALUES (0);
```
5. Dodaj konfigurację do pliku `configs.json`. Przykładowa konfiguracja jest dostępna w pliku `example_configs.json`.
6. Uruchom plik `app.py`.
- Windows
```bash
py app.py
```
- Linux
```bash
python3 app.py
```