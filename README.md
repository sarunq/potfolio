# portfolio

Tento projekt je mé osobní webové portfolio vytvořené v rámci školního zadání. Web slouží k prezentaci mé tvorby v oblasti grafického designu, digitální kresby a tvorby webových stránek. Cílem bylo vytvořit vizuálně zajímavou, ale přehlednou prezentaci mých dovedností a školních i soukromých projektů.

Web je koncipován jako vícestránková prezentace s důrazem na vizuální stránku (tmavý režim s barevnými akcenty). Hlavní stránka slouží jako rozcestník, zatímco podstránky (Web, Grafika, Kresby) fungují jako filtrovatelné galerie. Součástí je i kontaktní formulář pro potenciální klienty.

Design je plně responzivní a optimalizovaný pro mobilní telefony, tablety i stolní počítače. Grafika webu odráží můj osobní styl – kombinaci minimalismu, neonových gradientů a důrazu na detail.

## Použité technologie a knihovny

Při tvorbě webu byly využity následující technologie:

* **HTML5:** Sémantická struktura stránek.
* **CSS3:** Stylování pomocí Flexboxu a CSS Gridu, animace (CSS Keyframes), proměnné (:root) pro snadnou správu barev, media queries pro responzivitu.
* **JavaScript (Vanilla):**
    * Funkcionalita hamburger menu pro mobilní zařízení.
    * Filtrování projektů v galeriích.
    * Vlastní Lightbox (modální okno) pro prohlížení obrázků s funkcí carouselu (přepínání šipkami).
    * Automatické otevírání projektů přes URL parametry.
* **Google Fonts:** Použité písmo "Outfit".
* **SheetMonkey / Formspree:** Služba pro zpracování dat z kontaktního formuláře (odesílání na email/do tabulky).

## Postup nasazení (GitHub Pages)

Web je hostován pomocí služby **GitHub Pages**. Postup nasazení byl následující:

1.  Vytvoření veřejného repozitáře na GitHubu.
2.  Nahrání zdrojových kódů (HTML, CSS, JS, obrázky) do větve `main`.
3.  V nastavení repozitáře (Settings -> Pages) byla jako zdroj (Source) vybrána větev `main` a složka `root`.
4.  Po uložení GitHub vygeneroval veřejnou URL adresu webu.

**Odkaz na web:** [DOPLŇ SEM SVŮJ ODKAZ, např. https://saraforejtova.github.io/portfolio]

## Známé limity a TODO

* **Limity:** Kontaktní formulář využívá externí službu (free tier), která může mít omezený počet odeslání měsíčně. Web nemá vlastní backend (databázi), jedná se o statickou stránku.
* **TODO (Plány do budoucna):**
    * Doplnit více reálných projektů do sekce Web.
    * Přidat anglickou mutaci webu.
    * Optimalizace velikosti obrázků pro rychlejší načítání.

## Seznam obrázků a licence

Veškerý obsah byl použit v souladu s autorskými právy:

* **Vlastní tvorba:**
    * Veškeré kresby v sekci Kresby (Sára Forejtová).
    * Grafické návrhy a koláže v sekci Grafika (Sára Forejtová).
    * Logo a design webu.
    * Profilová fotografie.
* **Placeholder obrázky:**
    * V rané fázi vývoje byly použity placeholdery ze služby `placehold.co` (nyní nahrazeny vlastním obsahem).
