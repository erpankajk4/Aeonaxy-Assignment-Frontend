
export default function Pattern2() {
    const generatePattern = () => {
        const no_of_Ms = [
          27, 20, 20, 18, 16, 14, 12, 10, 8, 6, 4, 2, 1,
        ].reverse();
        const no_of_Space_bw_Ms = [
          6, 10, 9, 10, 11, 12, 14, 16, 19, 25, 37, 81, 0,
        ].reverse();
        const line_height = [ 9, 9, 9, 9, 11, 11, 11, 12, 13, 14, 15, 16, 17 ].reverse();
        let pattern = "";
        for (let i = 0; i < no_of_Ms.length; i++) {
          let row = "";
          // Add M's
          for (let j = 0; j < no_of_Ms[i]; j++) {
            row += "M";
            // Add space between M's except for the last one
            if (j < no_of_Ms[i] - 1) {
              for (let k = 0; k < no_of_Space_bw_Ms[i]; k++) {
                row += "\u00A0"; // Using unicode for non-breaking space
              }
            }
          }
          pattern += '<div style="line-height:' + line_height[i] + 'px;">' + row + "</div>";
        }
        return pattern;
      }
    
      return (
        <div className="w-max text-[0.66rem] md:text-xs text-center -tracking-[2px] font-[Arial]">
          <div dangerouslySetInnerHTML={{ __html: generatePattern() }} />
        </div>
      );
    }
