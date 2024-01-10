var MidiJSONToDesmos = (function () {
    var keyf = "f\\left(x\\right)=440\\cdot2^{\\frac{x-49}{12}}";
    var GenerateTrack = function (track) {
        var lines = [];
        track.forEach(key => {
            lines.push(
                `\\left\\{b\\ge${key.time+0.25}:\\left\\{b\\le${key.time+0.25+key.duration}:\\operatorname{tone}\\left(f\\left(${key.midi-20}\\right),1\\right)\\right\\}\\right\\}`
            );
        });
        return lines.join("\n");
    };
    var MidiToDesmos = function (midi) {
        var lines = [
            "f\\left(x\\right)=440\\cdot2^{\\frac{x-49}{12}}",
            "b = 0",
            "t = "+midi.header.tempos[0].bpm
        ];
        var highestTrackEnd = 0;
        midi.tracks.forEach(track => {
            lines.push(GenerateTrack(track.notes));
            var lastNote = track.notes[track.notes.length-1];
            track.notes.forEach(note => {
                if(note.time+note.duration > highestTrackEnd) {
                    highestTrackEnd = note.time+note.duration
                }
            });
        });
        lines.push("d = "+highestTrackEnd);
        return {
            linesArray: lines,
            lines: lines.join('\n'),
            interval: "\\frac{60000}{t}\\cdot0.5",
            timer: "\\left\\{b\\ge d:b\\to0,b<d:b\\to b+0.125\\right\\}",
            b: "d+0.125"
        }
    };
    return MidiToDesmos;
})();
