/* Verb data for the Conjugation duel game. To add a verb, copy a line and edit it.
   Persons are always in this order: io, tu, lui/lei, noi, voi, loro.
   pres : the 6 present-tense forms
   imp  : stem that takes -vo -vi -va -vamo -vate -vano (imperfetto)   [or impForms: all 6 forms]
   fut  : stem that takes -ò -ai -à -emo -ete -anno (futuro semplice)
   pp   : past participle     aux : 'avere' or 'essere' (helper verb for the passato prossimo) */
window.ITALIANO_VERBS = [
  { inf: 'essere', en: 'to be', aux: 'essere', pp: 'stato', pres: ['sono', 'sei', 'è', 'siamo', 'siete', 'sono'], impForms: ['ero', 'eri', 'era', 'eravamo', 'eravate', 'erano'], fut: 'sar' },
  { inf: 'avere', en: 'to have', aux: 'avere', pp: 'avuto', pres: ['ho', 'hai', 'ha', 'abbiamo', 'avete', 'hanno'], imp: 'ave', fut: 'avr' },
  { inf: 'fare', en: 'to do / make', aux: 'avere', pp: 'fatto', pres: ['faccio', 'fai', 'fa', 'facciamo', 'fate', 'fanno'], imp: 'face', fut: 'far' },
  { inf: 'andare', en: 'to go', aux: 'essere', pp: 'andato', pres: ['vado', 'vai', 'va', 'andiamo', 'andate', 'vanno'], imp: 'anda', fut: 'andr' },
  { inf: 'venire', en: 'to come', aux: 'essere', pp: 'venuto', pres: ['vengo', 'vieni', 'viene', 'veniamo', 'venite', 'vengono'], imp: 'veni', fut: 'verr' },
  { inf: 'stare', en: 'to stay / be (well)', aux: 'essere', pp: 'stato', pres: ['sto', 'stai', 'sta', 'stiamo', 'state', 'stanno'], imp: 'sta', fut: 'star' },
  { inf: 'mangiare', en: 'to eat', aux: 'avere', pp: 'mangiato', pres: ['mangio', 'mangi', 'mangia', 'mangiamo', 'mangiate', 'mangiano'], imp: 'mangia', fut: 'manger' },
  { inf: 'parlare', en: 'to speak', aux: 'avere', pp: 'parlato', pres: ['parlo', 'parli', 'parla', 'parliamo', 'parlate', 'parlano'], imp: 'parla', fut: 'parler' },
  { inf: 'comprare', en: 'to buy', aux: 'avere', pp: 'comprato', pres: ['compro', 'compri', 'compra', 'compriamo', 'comprate', 'comprano'], imp: 'compra', fut: 'comprer' },
  { inf: 'studiare', en: 'to study', aux: 'avere', pp: 'studiato', pres: ['studio', 'studi', 'studia', 'studiamo', 'studiate', 'studiano'], imp: 'studia', fut: 'studier' },
  { inf: 'giocare', en: 'to play', aux: 'avere', pp: 'giocato', pres: ['gioco', 'giochi', 'gioca', 'giochiamo', 'giocate', 'giocano'], imp: 'gioca', fut: 'giocher' },
  { inf: 'pagare', en: 'to pay', aux: 'avere', pp: 'pagato', pres: ['pago', 'paghi', 'paga', 'paghiamo', 'pagate', 'pagano'], imp: 'paga', fut: 'pagher' },
  { inf: 'arrivare', en: 'to arrive', aux: 'essere', pp: 'arrivato', pres: ['arrivo', 'arrivi', 'arriva', 'arriviamo', 'arrivate', 'arrivano'], imp: 'arriva', fut: 'arriver' },
  { inf: 'tornare', en: 'to come back', aux: 'essere', pp: 'tornato', pres: ['torno', 'torni', 'torna', 'torniamo', 'tornate', 'tornano'], imp: 'torna', fut: 'torner' },
  { inf: 'prendere', en: 'to take', aux: 'avere', pp: 'preso', pres: ['prendo', 'prendi', 'prende', 'prendiamo', 'prendete', 'prendono'], imp: 'prende', fut: 'prender' },
  { inf: 'vedere', en: 'to see', aux: 'avere', pp: 'visto', pres: ['vedo', 'vedi', 'vede', 'vediamo', 'vedete', 'vedono'], imp: 'vede', fut: 'vedr' },
  { inf: 'scrivere', en: 'to write', aux: 'avere', pp: 'scritto', pres: ['scrivo', 'scrivi', 'scrive', 'scriviamo', 'scrivete', 'scrivono'], imp: 'scrive', fut: 'scriver' },
  { inf: 'leggere', en: 'to read', aux: 'avere', pp: 'letto', pres: ['leggo', 'leggi', 'legge', 'leggiamo', 'leggete', 'leggono'], imp: 'legge', fut: 'legger' },
  { inf: 'bere', en: 'to drink', aux: 'avere', pp: 'bevuto', pres: ['bevo', 'bevi', 'beve', 'beviamo', 'bevete', 'bevono'], imp: 'beve', fut: 'berr' },
  { inf: 'dire', en: 'to say / tell', aux: 'avere', pp: 'detto', pres: ['dico', 'dici', 'dice', 'diciamo', 'dite', 'dicono'], imp: 'dice', fut: 'dir' },
  { inf: 'potere', en: 'can / to be able', aux: 'avere', pp: 'potuto', pres: ['posso', 'puoi', 'può', 'possiamo', 'potete', 'possono'], imp: 'pote', fut: 'potr' },
  { inf: 'volere', en: 'to want', aux: 'avere', pp: 'voluto', pres: ['voglio', 'vuoi', 'vuole', 'vogliamo', 'volete', 'vogliono'], imp: 'vole', fut: 'vorr' },
  { inf: 'dovere', en: 'must / to have to', aux: 'avere', pp: 'dovuto', pres: ['devo', 'devi', 'deve', 'dobbiamo', 'dovete', 'devono'], imp: 'dove', fut: 'dovr' },
  { inf: 'sapere', en: 'to know (a fact)', aux: 'avere', pp: 'saputo', pres: ['so', 'sai', 'sa', 'sappiamo', 'sapete', 'sanno'], imp: 'sape', fut: 'sapr' },
  { inf: 'dormire', en: 'to sleep', aux: 'avere', pp: 'dormito', pres: ['dormo', 'dormi', 'dorme', 'dormiamo', 'dormite', 'dormono'], imp: 'dormi', fut: 'dormir' },
  { inf: 'aprire', en: 'to open', aux: 'avere', pp: 'aperto', pres: ['apro', 'apri', 'apre', 'apriamo', 'aprite', 'aprono'], imp: 'apri', fut: 'aprir' },
  { inf: 'partire', en: 'to leave', aux: 'essere', pp: 'partito', pres: ['parto', 'parti', 'parte', 'partiamo', 'partite', 'partono'], imp: 'parti', fut: 'partir' },
  { inf: 'uscire', en: 'to go out', aux: 'essere', pp: 'uscito', pres: ['esco', 'esci', 'esce', 'usciamo', 'uscite', 'escono'], imp: 'usci', fut: 'uscir' },
];
