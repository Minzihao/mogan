<TeXmacs|1.0.3.4>

<style|source>

<\body>
  <\active*>
    <\src-title>
      <src-style-file|source|1.0>

      <\src-purpose>
        This style should be used for editing style files and packages.
      </src-purpose>

      <\src-copyright|2004>
        Joris van der Hoeven
      </src-copyright>

      <\src-license>
        This <TeXmacs> style file falls under the <hlink|GNU general public
        license|$TEXMACS_PATH/LICENSE> and comes WITHOUT ANY WARRANTY
        WHATSOEVER. If you don't have this file, then write to the Free
        Software Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA
        02111-1307, USA.
      </src-license>
    </src-title>
  </active*>

  <use-package|std-markup>

  <\active*>
    <\src-comment>
      Environment variables
    </src-comment>
  </active*>

  <assign|preamble|true>

  <assign|par-first|0fn>

  <assign|par-par-sep|0.5fn>

  <\active*>
    <\src-comment>
      Tags for entering the name of the style file or package and further
      information
    </src-comment>
  </active*>

  <assign|src-title|<\macro|x>
    <\surround|<vspace*|1.5fn>|<vspace|1.5fn>>
      <with|color|dark blue|<block|<tformat|<twith|table-width|1par>|<cwith|1|1|1|1|cell-hyphen|t>|<cwith|1|1|1|1|cell-bsep|1.5spc>|<cwith|1|1|1|1|cell-tsep|1.5spc>|<cwith|1|1|1|1|cell-background|pastel
      blue>|<cwith|1|1|1|1|cell-lborder|0.5ln>|<cwith|1|1|1|1|cell-rborder|0.5ln>|<cwith|1|1|1|1|cell-bborder|0.5ln>|<cwith|1|1|1|1|cell-tborder|0.5ln>|<cwith|1|1|1|1|cell-hpart|1>|<table|<row|<\cell>
        <with|font-size|1|font-family|ss|color|dark
        blue|par-par-sep|0fn|<arg|x>>
      </cell>>>>>>
    </surround>
  </macro>>

  <assign|src-title-line|<\macro|x|y>
    <tabular|<tformat|<twith|table-width|1par>|<twith|table-valign|T>|<cwith|1|1|1|1|cell-width|5fn>|<cwith|1|1|1|1|cell-lsep|0spc>|<cwith|1|1|1|1|cell-rsep|0spc>|<cwith|1|1|1|1|cell-bsep|0spc>|<cwith|1|1|1|1|cell-tsep|0spc>|<cwith|1|1|2|2|cell-hyphen|t>|<cwith|1|1|2|2|cell-hpart|1>|<table|<row|<cell|<with|font-series|bold|<arg|x>:
    >>|<\cell>
      <arg|y>
    </cell>>>>>
  </macro>>

  <assign|src-style-file|<macro|x|y|<\surround|<assign|<merge|<arg|x>|-style>|<arg|y>>|>
    <src-title-line|Style|<arg|x>-<arg|y>>
  </surround>>>

  <assign|src-package|<macro|x|y|<\surround|<assign|<merge|<arg|x>|-package>|<arg|y>><assign|<merge|<arg|x>|-drd>|<arg|y>>|>
    <src-title-line|Package|<arg|x>-<arg|y>>
  </surround>>>

  <assign|src-purpose|<\macro|x>
    <src-title-line|Purpose|<arg|x>>
  </macro>>

  <assign|src-copyright|<\macro|x|y>
    <src-title-line|Copyright|<\surround|<active*|<with|font|tcx|�>> <arg|x>
    by |>
      <arg|y>
    </surround>>
  </macro>>

  <assign|src-license|<\macro|x>
    <src-title-line|License|<with|font-size|0.84|<arg|x>>>
  </macro>>

  <\active*>
    <\src-comment>
      An environment for comments in style files or packages.
    </src-comment>
  </active*>

  <assign|src-comment|<\macro|x>
    <surround|<vspace*|1.5fn>|<vspace|0.5fn>|<with|color|dark
    grey|<block|<tformat|<twith|table-width|1par>|<cwith|1|1|1|1|cell-hyphen|t>|<cwith|1|1|1|1|cell-bsep|1spc>|<cwith|1|1|1|1|cell-tsep|1spc>|<cwith|1|1|1|1|cell-background|pastel
    yellow>|<cwith|1|1|1|1|cell-lborder|0.5ln>|<cwith|1|1|1|1|cell-rborder|0.5ln>|<cwith|1|1|1|1|cell-bborder|0.5ln>|<cwith|1|1|1|1|cell-tborder|0.5ln>|<table|<row|<\cell>
      <with|font-size|0.84|font-shape|slanted|<arg|x>>
    </cell>>>>>>>
  </macro>>

  \;
</body>

<\initial>
  <\collection>
    <associate|page-bot|30mm>
    <associate|page-even|30mm>
    <associate|page-odd|30mm>
    <associate|page-reduce-bot|15mm>
    <associate|page-reduce-left|25mm>
    <associate|page-reduce-right|25mm>
    <associate|page-reduce-top|15mm>
    <associate|page-right|30mm>
    <associate|page-top|30mm>
    <associate|page-type|a4>
    <associate|par-width|150mm>
    <associate|preamble|true>
    <associate|sfactor|4>
  </collection>
</initial>