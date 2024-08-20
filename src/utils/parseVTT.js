const parseVTT = (vttText) => {
  const lines = vttText.split('\n');
  const subtitles = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();
    if (line === '') {
      i++;
      continue;
    }

    // Read the timestamp line
    const [start, end] = line.split(' --> ');

    // Read the subtitle text lines
    let text = '';
    i++;
    while (i < lines.length && lines[i].trim() !== '') {
      text += lines[i].trim() + ' ';
      i++;
    }

    subtitles.push({ start, end, text: text.trim() });
  }

  return subtitles;
};

export default parseVTT;
